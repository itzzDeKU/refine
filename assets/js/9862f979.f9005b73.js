"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"list-search",title:"List Search"},c=void 0,l={unversionedId:"advanced-tutorials/search/list-search",id:"advanced-tutorials/search/list-search",title:"List Search",description:"We will examine how to make an extensive search and filtering with the useSimpleList hook that works with the Ant Design's `` component.",source:"@site/docs/advanced-tutorials/search/list-search.md",sourceDirName:"advanced-tutorials/search",slug:"/advanced-tutorials/search/list-search",permalink:"/docs/advanced-tutorials/search/list-search",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/search/list-search.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1708416262,formattedLastUpdatedAt:"Feb 20, 2024",frontMatter:{id:"list-search",title:"List Search"},sidebar:"mainSidebar",previous:{title:"Mutation Mode",permalink:"/docs/advanced-tutorials/mutation-mode"},next:{title:"Search",permalink:"/docs/advanced-tutorials/search/"}},p={},d=[{value:"Example",id:"example",level:2}],m=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const h={toc:d};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We will examine how to make an extensive search and filtering with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/hooks/use-simple-list"},(0,r.kt)("inlineCode",{parentName:"a"},"useSimpleList"))," hook that works with the Ant Design's ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/list"},(0,r.kt)("inlineCode",{parentName:"a"},"<List>"))," component."),(0,r.kt)("p",null,"To do this, let's list posts using the posts resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import { useMany } from "@refinedev/core";\nimport {\n  List,\n  // highlight-next-line\n  useSimpleList,\n  NumberField,\n} from "@refinedev/antd";\nimport { List as AntdList, Typography, Space } from "antd";\n\nconst { Text } = Typography;\n\nexport const PostList: React.FC = () => {\n  // highlight-next-line\n  const { listProps } = useSimpleList<IPost>();\n\n  const categoryIds = listProps?.dataSource?.map((item) => item.category.id) ?? [];\n  const { data } = useMany<ICategory>({\n    resource: "categories",\n    ids: categoryIds,\n    queryOptions: {\n      enabled: categoryIds.length > 0,\n    },\n  });\n\n  const renderItem = (item: IPost) => {\n    const { title, hit, content } = item;\n\n    const categoryTitle = data?.data.find((category: ICategory) => category.id === item.category.id)?.title;\n\n    return (\n      <AntdList.Item\n        actions={[\n          <Space key={item.id} direction="vertical" align="end">\n            <NumberField\n              value={hit}\n              options={{\n                notation: "compact",\n              }}\n            />\n            <Text>{categoryTitle}</Text>\n          </Space>,\n        ]}\n      >\n        <AntdList.Item.Meta title={title} description={content} />\n      </AntdList.Item>\n    );\n  };\n\n  return (\n    <List>\n      // highlight-next-line\n      <AntdList {...listProps} renderItem={renderItem} />\n    </List>\n  );\n};\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n  hit: number;\n  category: { id: number };\n}\n')),(0,r.kt)("p",null,"After creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"<PostList>")," component, add it to the resource with ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," prop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, useNotificationProvider, ErrorComponent, RefineThemes } from "@refinedev/antd";\nimport routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { ConfigProvider } from "antd";\nimport "@refinedev/antd/dist/reset.css";\n\n// highlight-next-line\nimport { PostList } from "pages/posts";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider(API_URL)}\n          notificationProvider={useNotificationProvider}\n          // highlight-start\n          resources={[\n            {\n              name: "posts",\n              list: "/posts",\n            },\n          ]}\n          //highlight-end\n        >\n          <Routes>\n            <Route index element={<NavigateToResource />} />\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              <Route path="/posts" element={<PostList />} />\n            </Route>\n            <Route path="*" element={<ErrorComponent />} />\n          </Routes>\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n\nexport default App;\n')),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/list-search/basic-list.png",alt:"basic list"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"We will create a form by extracting ",(0,r.kt)("inlineCode",{parentName:"p"},"searchFormProps")," from ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/hooks/use-simple-list"},(0,r.kt)("inlineCode",{parentName:"a"},"useSimpleList")),". We will use this form for search/filtering. We will also create an interface to determine the types of values from the form."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'...\n\nimport {\n    ...\n// highlight-next-line\n    CrudFilters,\n} from "@refinedev/core";\n\nexport const PostList: React.FC = () => {\n// highlight-start\n    const { listProps, searchFormProps } = useSimpleList<\n        IPost,\n        IPostFilterVariables\n    >({\n        onSearch: (params) => {\n            const filters: CrudFilters = [];\n            const { category, createdAt } = params;\n\n            filters.push(\n                {\n                    field: "category.id",\n                    operator: "eq",\n                    value: category,\n                },\n                {\n                    field: "createdAt",\n                    operator: "gte",\n                    value: createdAt ? createdAt[0].toISOString() : undefined,\n                },\n                {\n                    field: "createdAt",\n                    operator: "lte",\n                    value: createdAt ? createdAt[1].toISOString() : undefined,\n                },\n            );\n\n            return filters;\n        },\n    });\n// highlight-end\n\n    // ...\n\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "categories",\n    });\n\n    return (\n        <List>\n// highlight-start\n            <Form\n                {...searchFormProps}\n                layout="vertical"\n                onValuesChange={() => searchFormProps.form?.submit()}\n            >\n                <Space wrap>\n                    <Form.Item label="Category" name="category">\n                        <Select\n                            {...categorySelectProps}\n                            allowClear\n                            placeholder="Search Categories"\n                        />\n                    </Form.Item>\n                    <Form.Item label="Created At" name="createdAt">\n                        <RangePicker />\n                    </Form.Item>\n                </Space>\n            </Form>\n            <AntdList {...listProps} renderItem={renderItem} />\n// highlight-end\n        </List>\n    );\n};\n\ninterface IPostFilterVariables {\n    category: string;\n    createdAt: [Dayjs, Dayjs];\n}\n')),(0,r.kt)("p",null,"When the form is submitted, the ",(0,r.kt)("inlineCode",{parentName:"p"},"onSearch")," method runs and we get the search form values. Then the ",(0,r.kt)("inlineCode",{parentName:"p"},"listProps")," is refreshed according to the criteria."),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/list-search/form-list.png",alt:"form list"}),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/core/interface-references#crudfilters"},(0,r.kt)("inlineCode",{parentName:"a"},"CrudFilters"))," type object has ",(0,r.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"operator"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," properties. These properties help us to filter in which field, with which operator, and with which data.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(m,{path:"use-simple-list-antd",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);