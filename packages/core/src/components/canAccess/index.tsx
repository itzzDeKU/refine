import React, { useEffect } from "react";

import { useCan, useResource } from "@hooks";
import { BaseKey, IResourceItem, ITreeMenu } from "../../interfaces";
import { UseQueryOptions } from "@tanstack/react-query";

import { CanReturnType } from "../../interfaces";

type CanParams = {
    resource?: IResourceItem & { children?: ITreeMenu[] };
    id?: BaseKey;
    [key: string]: any;
};

type OnUnauthorizedProps = {
    resource?: string;
    reason?: string;
    action: string;
    params: CanParams;
};

type CanAccessBaseProps = {
    /**
     * Resource name for API data interactions
     */
    resource?: string;
    /**
     * Intended action on resource
     */
    action: string;
    /**
     * Parameters associated with the resource
     * @type { resource?: [IResourceItem](https://refine.dev/docs/api-reference/core/interfaceReferences/#canparams), id?: [BaseKey](https://refine.dev/docs/api-reference/core/interfaceReferences/#basekey), [key: string]: any }
     */
    params?: CanParams;
    /**
     * Content to show if access control returns `false`
     */
    fallback?: React.ReactNode;
    /**
     * Callback function to be called if access control returns `can: false`
     */
    onUnauthorized?: (props: OnUnauthorizedProps) => void;
    children: React.ReactNode;
    queryOptions?: UseQueryOptions<CanReturnType>;
};

type CanAccessWithoutParamsProps = {
    [key in Exclude<
        keyof CanAccessBaseProps,
        "fallback" | "children"
    >]?: undefined;
} & {
    [key in "fallback" | "children"]?: CanAccessBaseProps[key];
};

export type CanAccessProps = CanAccessBaseProps | CanAccessWithoutParamsProps;

export const CanAccess: React.FC<CanAccessProps> = ({
    resource: resourceFromProp,
    action: actionFromProp,
    params: paramsFromProp,
    fallback,
    onUnauthorized,
    children,
    queryOptions: componentQueryOptions,
    ...rest
}) => {
    const {
        resource,
        id: idFromRoute,
        action: actionFromRoute,
    } = useResource(resourceFromProp);
    const { identifier } = useResource();

    const getDefaultId = () => {
        const idFromPropsOrRoute = paramsFromProp?.id ?? idFromRoute;

        if (resourceFromProp && resourceFromProp !== identifier) {
            return paramsFromProp?.id;
        }

        return idFromPropsOrRoute;
    };
    const defaultId = getDefaultId();

    const resourceName = resourceFromProp ?? resource?.name;
    const action = actionFromProp ?? actionFromRoute ?? "";
    const params = paramsFromProp ?? {
        id: defaultId,
        resource: resource,
    };

    const { data } = useCan({
        resource: resourceName,
        action,
        params,
        queryOptions: componentQueryOptions, 
    });

    useEffect(() => {
        if (onUnauthorized && data?.can === false) {
            onUnauthorized({
                resource: resourceName,
                action,
                reason: data?.reason,
                params,
            });
        }
    }, [data?.can]);

    if (data?.can) {
        if (React.isValidElement(children)) {
            const Children = React.cloneElement(children, rest);
            return Children;
        }

        return <>{children}</>;
    }

    if (data?.can === false) {
        return <>{fallback ?? null}</>;
    }

    return null;
};
