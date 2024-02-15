"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39030],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>h});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),h=a,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},36023:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});t(67294);var n=t(3905);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={title:"Error Boundaries in React -  Handling Errors Gracefully",description:"We'll see how to handle errors in React using Error Boundaries and how to use the react-error-boundary library to handle errors in React.",slug:"react-error-boundaries",authors:"chidume_nnamdi",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-09-react-error-bounderies/social.png",hide_table_of_contents:!1},p=void 0,s={permalink:"/blog/react-error-boundaries",source:"@site/blog/2023-11-09-react-error-boundaries.md",title:"Error Boundaries in React -  Handling Errors Gracefully",description:"We'll see how to handle errors in React using Error Boundaries and how to use the react-error-boundary library to handle errors in React.",date:"2023-11-09T00:00:00.000Z",formattedDate:"November 9, 2023",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:11.66,hasTruncateMarker:!1,authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],frontMatter:{title:"Error Boundaries in React -  Handling Errors Gracefully",description:"We'll see how to handle errors in React using Error Boundaries and how to use the react-error-boundary library to handle errors in React.",slug:"react-error-boundaries",authors:"chidume_nnamdi",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-09-react-error-bounderies/social.png",hide_table_of_contents:!1},prevItem:{title:"Introduction to Mantine UI",permalink:"/blog/mantine-ui-react"},nextItem:{title:"Essentials of TypeScript Classes",permalink:"/blog/typescript-classes"},relatedPosts:[{title:"A Comprehensive Guide of React Unit Testing",description:"We'll learn how to unit test our component down to hooks and Context.",permalink:"/blog/react-unit-testing",formattedDate:"May 26, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:20.295,date:"2023-05-26T00:00:00.000Z"},{title:"How to Build a React Admin Panel with Mantine and Strapi",description:"We'll be building a simple React Admin Panel with Refine and Mantine using Strapi as a backend service.",permalink:"/blog/react-admin-panel",formattedDate:"February 23, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:22.995,date:"2023-02-23T00:00:00.000Z"},{title:"React Slick Examples - Creating a carousel",description:"We'll see how to use React Slick in your React projects through a step-by-step guide and hands-on demo.",permalink:"/blog/react-slick",formattedDate:"October 29, 2023",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:18.165,date:"2023-10-29T00:00:00.000Z"}],authorPosts:[{title:"Using SVGs in React",description:"Let's talk about React SVG and how it makes the process of adding and handling images on modern websites more versatile and fun.",permalink:"/blog/react-svg",formattedDate:"November 17, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:13.28,date:"2023-11-17T00:00:00.000Z"},{title:"A Guide on React Lazy Loading",description:"We will be looking at what lazy loading is, how it works, and how it can be used to improve the performance of React applications.",permalink:"/blog/react-lazy-loading",formattedDate:"December 7, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:9.85,date:"2022-12-07T00:00:00.000Z"},{title:"Getting started with Astro Framework",description:"We will learn how to set up Astrojs, create a new project, and basics.",permalink:"/blog/astro-js-guide",formattedDate:"February 7, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:16.44,date:"2024-02-07T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"What Are React Error Boundaries?",id:"what-are-react-error-boundaries",level:2},{value:"Basic Usage of Error Boundaries",id:"basic-usage-of-error-boundaries",level:2},{value:"Error Boundary Limitations",id:"error-boundary-limitations",level:2},{value:"Handling errors using <code>react-error-boundary</code> library",id:"handling-errors-using-react-error-boundary-library",level:2},{value:"Resetting your app after an Error",id:"resetting-your-app-after-an-error",level:2},{value:"FallbackComponent prop",id:"fallbackcomponent-prop",level:2}],u={toc:d};function h(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({},u,t),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"React, a popular JavaScript library for building user interfaces offers a powerful tool called Error Boundaries. These Error Boundaries serve as a safety net for React applications, allowing developers to gracefully catch and manage errors, preventing them from propagating up the component tree and causing application crashes."),(0,n.kt)("p",null,"Developers can utilize Error Boundaries to present users with informative error messages, log error specifics to aid in debugging, and ensure the application remains resilient even in the face of unforeseen challenges. In the forthcoming sections, we will investigate the critical role of error handling and examine how React Error Boundaries can elevate the user experience by serving as a protective shield for your application."),(0,n.kt)("p",null,"Steps we'll cover:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#what-are-react-error-boundaries"},"What Are React Error Boundaries?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#basic-usage-of-error-boundaries"},"Basic Usage of Error Boundaries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#error-boundary-limitations"},"Error Boundary Limitations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#handling-errors-using-react-error-boundary-library"},"Handling errors using ",(0,n.kt)("inlineCode",{parentName:"a"},"react-error-boundary")," library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#resetting-your-app-after-an-error"},"Resetting your app after an Error")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#fallbackcomponent-prop"},"FallbackComponent prop"))),(0,n.kt)("h2",{id:"what-are-react-error-boundaries"},"What Are React Error Boundaries?"),(0,n.kt)("p",null,"In JavaScript, we use the ",(0,n.kt)("inlineCode",{parentName:"p"},"try...catch")," statement to catch errors."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"try {\n  // code that may throw an error\n} catch (error) {\n  // code to handle the error\n}\n")),(0,n.kt)("p",null,"We put the fragile code inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"try")," block, and if an error occurs, we catch it in the ",(0,n.kt)("inlineCode",{parentName:"p"},"catch")," block. This fragile code is a code we are unsure that there might be undefined or null occurring and we don't want the whole program stopping, so we enclose them in the ",(0,n.kt)("inlineCode",{parentName:"p"},"try")," block. The ",(0,n.kt)("inlineCode",{parentName:"p"},"catch")," block is where we handle the error. It is there that we can display a message to the user or log the error to the console."),(0,n.kt)("p",null,"You will find this ",(0,n.kt)("inlineCode",{parentName:"p"},"try...catch")," statement very useful when working with imperative code, and you don't want your users to see their app breaking down in the middle of usage.\nHowever, this approach is not suitable for React applications, as it only works for imperative code. React applications are declarative, meaning they are composed of components that render based on the state of the application. Therefore, we need a different approach for handling errors in React applications."),(0,n.kt)("p",null,"The concept of Error Boundaries in React was introduced in version 16 of the library. Before the introduction of Error Boundaries, errors in React components were challenging to handle gracefully. When an error occurs within a component, it could potentially corrupt the entire component tree, leading to a broken user interface and a poor user experience.\nReact Error Boundary is like the ",(0,n.kt)("inlineCode",{parentName:"p"},"try..catch")," of React. It is a React component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of the component tree that crashed.\nSee a component tree below:"),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-09-react-error-bounderies/1.jpeg",alt:"mojo framework"})),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"root")," is the root component of the component tree. It is the parent of ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP I")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP II"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP I")," is the parent of ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP III")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP IV"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP III")," is the parent of ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP V"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP IV")," is the parent component of ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP VI"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP I"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP II"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP III"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP IV")," are leaf components."),(0,n.kt)("p",null,"If an error occurs in ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP V"),", it will propagate up the component tree to ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP III"),", then to ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP I"),", and finally to ",(0,n.kt)("inlineCode",{parentName:"p"},"root"),". If there is no error boundary in the component tree, the entire component tree will be corrupted, and the application will crash."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-09-react-error-bounderies/2.jpeg",alt:"mojo framework"})),(0,n.kt)("br",null),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-09-react-error-bounderies/3.jpeg",alt:"mojo framework"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"However, if there is an error boundary in the component tree, it will catch the error and display a fallback UI instead of the component tree that crashed."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-09-react-error-bounderies/4.jpeg",alt:"mojo framework"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"Here, the error boundary is ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP III"),". It catches the error that occurred in ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP V")," and displays a fallback UI instead of the component tree that crashed. The error and crash do not propagate up the component tree to ",(0,n.kt)("inlineCode",{parentName:"p"},"COMP I")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"root"),". We see now the benefit of React Error Boundary."),(0,n.kt)("p",null,"Error Boundaries are React components that implement the ",(0,n.kt)("inlineCode",{parentName:"p"},"componentDidCatch")," lifecycle method. This method is invoked after an error has been thrown by a descendant component. It receives two arguments: ",(0,n.kt)("inlineCode",{parentName:"p"},"error")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"info"),". The ",(0,n.kt)("inlineCode",{parentName:"p"},"error")," argument is the error that was thrown, while the ",(0,n.kt)("inlineCode",{parentName:"p"},"info")," argument is an object that contains a component stack trace."),(0,n.kt)("h2",{id:"basic-usage-of-error-boundaries"},"Basic Usage of Error Boundaries"),(0,n.kt)("p",null,"In the last section, we said that Error Boundaries are React components that implement the ",(0,n.kt)("inlineCode",{parentName:"p"},"componentDidCatch")," lifecycle method. A lifecycle method is a special method in a React Component that is invoked at a particular stage in the lifecycle of the component."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"componentDidCatch")," lifecycle method is invoked after an error has been thrown by a descendant component.")),(0,n.kt)("p",null,"There are different stages in the lifecycle of a component in React. The stages are: ",(0,n.kt)("inlineCode",{parentName:"p"},"initialization"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"mounting"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"updating"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"unmounting"),". The ",(0,n.kt)("inlineCode",{parentName:"p"},"componentDidCatch")," lifecycle method is invoked during the ",(0,n.kt)("inlineCode",{parentName:"p"},"updating")," stage of the component lifecycle.\nThis method is invoked after an error has been thrown by a descendant component. It receives two arguments: ",(0,n.kt)("inlineCode",{parentName:"p"},"error")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"info"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"error")," argument is the error that was thrown."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"info")," argument is an object that contains a component stack trace.")),(0,n.kt)("p",null,"Let's see a simple example of an Error Boundary."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\n\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  componentDidCatch(error, info) {\n    this.setState({ hasError: true });\n    console.log(error, info);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h1>Something went wrong.</h1>;\n    }\n    return this.props.children;\n  }\n}\n')),(0,n.kt)("p",null,"There are things we need to learn here. See that in the ",(0,n.kt)("inlineCode",{parentName:"p"},"componentDidCatch")," method it receives two arguments as we have known. The ",(0,n.kt)("inlineCode",{parentName:"p"},"error")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"info")," arguments. We set the ",(0,n.kt)("inlineCode",{parentName:"p"},"hasError")," property of the state to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"componentDidCatch")," method. We also log the error and info to the console. We will see the use of the ",(0,n.kt)("inlineCode",{parentName:"p"},"hasError")," property later.\nThis is a basic usage of an Error Boundary. We will see how to use it in a React application."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Handling Different Types of Errors")),(0,n.kt)("p",null,"In React, we can create components from a function or a class. We call them functional components and class components respectively. React Error Boundaries are only created from class components because they implement the ",(0,n.kt)("inlineCode",{parentName:"p"},"componentDidCatch")," lifecycle method. There is no way to implement ",(0,n.kt)("inlineCode",{parentName:"p"},"componentDidCatch")," lifecycle method in functional components for now. React can come up with their magic in the future where we can be able to create an Error Boundary in functional components but for now, we can only do that in the class components."),(0,n.kt)("p",null,"We stated in the last section that a React Error Boundary is created when a class component implements the ",(0,n.kt)("inlineCode",{parentName:"p"},"componentDidCatch")," lifecycle method. A class component can also be an Error Boundary if it defines either (or both) of the lifecycle methods ",(0,n.kt)("inlineCode",{parentName:"p"},"static getDerivedStateFromError()")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"componentDidCatch()"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"static getDerivedStateFromError()")," lifecycle method is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as an argument and should return a value to update state."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"static getDerivedStateFromError(error) {\n    // Update state so the next render will show the fallback UI.\n    return { hasError: true };\n}\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"getDerivedStateFromError"),"is used to render a fallback UI after an error has been thrown by a descendant component. The ",(0,n.kt)("inlineCode",{parentName:"p"},"componentDidCatch")," lifecycle method is used to log the error information."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"componentDidCatch(error, info) {\n    // You can also log the error to an error-reporting service\n    logErrorToMyService(error, info);\n}\n")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\n\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    // Update state so the next render will show the fallback UI.\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, info) {\n    // You can also log the error to an error-reporting service\n    logErrorToMyService(error, info);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      // You can render any custom fallback UI\n      return <h1>Something went wrong.</h1>;\n    }\n\n    return this.props.children;\n  }\n}\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"getDerivedStateFromError"),' method is called during the "render" phase, so side effects are not permitted. For those use cases, use the ',(0,n.kt)("inlineCode",{parentName:"p"},"componentDidCatch")," lifecycle method instead. In the ",(0,n.kt)("inlineCode",{parentName:"p"},"componentDidCatch")," method, we can log the error to an error reporting service. We can also use it to perform side effects. We will see how to do that later."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"<ErrorBoundary>\n  <MyComponent />\n</ErrorBoundary>\n")),(0,n.kt)("p",null,"The code above is an example of how to use an Error Boundary in a React application. We wrap the component we want to catch errors from in the Error Boundary component. In this case, we wrap the ",(0,n.kt)("inlineCode",{parentName:"p"},"MyComponent")," component in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ErrorBoundary")," component. If an error occurs in the ",(0,n.kt)("inlineCode",{parentName:"p"},"MyComponent")," component, it will be caught by the ",(0,n.kt)("inlineCode",{parentName:"p"},"ErrorBoundary")," component."),(0,n.kt)("p",null,"This is akin to ",(0,n.kt)("inlineCode",{parentName:"p"},"try...catch")," in JavaScript:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"try {\n  MyComponent();\n} catch (error) {\n  // code to handle the error\n}\n")),(0,n.kt)("h2",{id:"error-boundary-limitations"},"Error Boundary Limitations"),(0,n.kt)("p",null,"We have seen throughout this post the beauty of handling errors in React using Error Boundary but the downside is that not all errors can be caught by Error Boundary. Some errors cannot be caught by Error Boundary. We will see them in this section."),(0,n.kt)("p",null,"Error Boundaries do not catch errors for:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Event handlers")),(0,n.kt)("p",null,"Event handlers inside React components are not known by React, they are functions to be called when an event happens. they are handled by the browser DOM. Therefore, if an error occurs in an event handler, it will not be caught by the Error Boundary."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Asynchronous code")),(0,n.kt)("p",null,"Asynchronous code (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"setTimeout")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame")," callbacks) same thing as Event handlers are not caught by React so the Error Boundary cannot catch them to deal with them."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Server-side rendering")),(0,n.kt)("p",null,"Error boundaries are specific to the client side and won't catch errors that occur on the server or in server-side rendering. Server errors should be handled on the server and communicated to the client."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Errors in Error Boundary component")),(0,n.kt)("p",null,"Errors thrown in the error boundary itself (rather than its children) cannot be handled by the Error boundary, it is a component also, so we should take great care when writing our error boundary component."),(0,n.kt)("p",null,"Error boundaries can help display a fallback UI, but they don't inherently manage the error state of your application. You need to implement your own error state management and recovery strategies."),(0,n.kt)("h2",{id:"handling-errors-using-react-error-boundary-library"},"Handling errors using ",(0,n.kt)("inlineCode",{parentName:"h2"},"react-error-boundary")," library"),(0,n.kt)("p",null,"Error handling business in React has been simplified by a great library called ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-error-boundary"},"react-error-boundary"),". It is a reusable React error boundary component. Supports all React renderers (including React DOM and React Native)."),(0,n.kt)("p",null,"To use it, we need to install it via npm or yarn:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm install react-error-boundary\n")),(0,n.kt)("p",null,"Then we import it in our React application:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ErrorBoundary } from "react-error-boundary";\n')),(0,n.kt)("p",null,"With this library, we do not need to create a React Error Boundary component. the library has done that for us. We only need to use it in our React application. ",(0,n.kt)("inlineCode",{parentName:"p"},"react-error-boundary")," exposes an ErrorBoundary component, which supports several props to help you build an error boundary component with no effort."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"<ErrorBoundary fallback={<div>Something went wrong</div>}>\n  <ExampleApplication />\n</ErrorBoundary>\n")),(0,n.kt)("p",null,"You see how simple it is. Just wrap the component you want to catch errors from in the ErrorBoundary component. The ",(0,n.kt)("inlineCode",{parentName:"p"},"fallback")," prop is the UI to render when there is an error. It can be a React component or a function that returns a React component."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ErrorBoundary")," component has some useful that we can use to render UI fallback or get some errors."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"fallbackRender")),(0,n.kt)("p",null,"This ",(0,n.kt)("inlineCode",{parentName:"p"},"fallbackRender")," is a Render prop passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"ErrorBoundary"),". The ",(0,n.kt)("inlineCode",{parentName:"p"},"fallbackRender")," prop is a function, it is called when an error occurs and the return value is a JSX that is rendered in place of the misbehaving component."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'function fallbackRender({ error, resetErrorBoundary }) {\n  return (\n    <div role="alert">\n      <p>Something went wrong:</p>\n      <pre style={{ color: "red" }}>{error.message}</pre>\n    </div>\n  );\n}\n\n<ErrorBoundary fallbackRender={fallbackRender}>\n  <ExampleApplication />\n</ErrorBoundary>;\n')),(0,n.kt)("p",null,"See that the render prop is called with an object that destructs to ",(0,n.kt)("inlineCode",{parentName:"p"},"error")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"resetErrorBoundary"),". The ",(0,n.kt)("inlineCode",{parentName:"p"},"error")," is the error message details and the ",(0,n.kt)("inlineCode",{parentName:"p"},"resetErrorBoundary")," is a function that can be called to reset the error boundary and retry the render."),(0,n.kt)("h2",{id:"resetting-your-app-after-an-error"},"Resetting your app after an Error"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"react-error-boundary")," provides us with a prop ",(0,n.kt)("inlineCode",{parentName:"p"},"onReset")," which we can use to reset our component when an error is thrown."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'function fallbackRender({ error, resetErrorBoundary }) {\n  return (\n    <div role="alert">\n      <p>Something went wrong:</p>\n      <pre style={{ color: "red" }}>{error.message}</pre>\n    </div>\n  );\n}\n\n<ErrorBoundary\n  fallbackRender={fallbackRender}\n  onReset={() => {\n    // reset the state of your app so the error doesn\'t happen again\n  }}\n>\n  <ExampleApplication />\n</ErrorBoundary>;\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"onReset")," is called when the ",(0,n.kt)("inlineCode",{parentName:"p"},"resetErrorBoundary")," function is called. The ",(0,n.kt)("inlineCode",{parentName:"p"},"resetErrorBoundary")," function is passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"fallbackRender")," function as a parameter.\nWe can now add a button in the JSX returned by the ",(0,n.kt)("inlineCode",{parentName:"p"},"fallbackRender")," function to reset the error boundary."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'function fallbackRender({ error, resetErrorBoundary }) {\n  return (\n    <div role="alert">\n      <p>Something went wrong:</p>\n      <pre style={{ color: "red" }}>{error.message}</pre>\n      <button onClick={resetErrorBoundary}>Try again</button>\n    </div>\n  );\n}\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"resetErrorBoundary")," function is called when the ",(0,n.kt)("inlineCode",{parentName:"p"},"retry")," button is clicked. This will reset the error boundary and retry the render.\nYou see that the library has made it easy for us to handle errors in our React application. We don't need to create an Error Boundary component, the library has done that for us. We only need to use it in our React application."),(0,n.kt)("h2",{id:"fallbackcomponent-prop"},"FallbackComponent prop"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"react-error-boundary")," library also provides us with a ",(0,n.kt)("inlineCode",{parentName:"p"},"FallbackComponent")," prop. This prop is used to render a fallback UI when an error occurs. It is a React component."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'function ErrorFallbackComponent({ error, resetErrorBoundary }) {\n  return (\n    <div role="alert">\n      <p>Something went wrong:</p>\n      <pre style={{ color: "red" }}>{error.message}</pre>\n      <button onClick={resetErrorBoundary}>Try again</button>\n    </div>\n  );\n}\n\n<ErrorBoundary FallbackComponent={ErrorFallbackComponent}>\n  <ExampleApplication />\n</ErrorBoundary>;\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ErrorFallbackComponent")," is a React component that renders a fallback UI when an error occurs. It receives two props: ",(0,n.kt)("inlineCode",{parentName:"p"},"error")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"resetErrorBoundary"),". The ",(0,n.kt)("inlineCode",{parentName:"p"},"error")," is the error message details and the ",(0,n.kt)("inlineCode",{parentName:"p"},"resetErrorBoundary")," is a function that can be called to reset the error boundary and retry the render."))}h.isMDXComponent=!0}}]);