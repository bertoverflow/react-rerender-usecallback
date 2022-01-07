# Child-Rerendering, useCallback, memo

The docs for `useCallback` (https://reactjs.org/docs/hooks-reference.html#usecallback) state:
> This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. > shouldComponentUpdate).

The important statement here is OPTIMIZED child components.

By default, if you have a parent component that rerenders, all of its child-components always also rerender!

It does not matter if they have:
- no props at all
- props that do not change
- function-props that are wrapped with `useCallback` (and thus do not change)

If you know your child component does not need to rerender when its props have not changed, then you can use `React.PureComponent` (classes) or `React.memo` (functional components)

Both "enable" shallow comparison of the props and if they have not changed, react will skip the rerendering of this component.

Beware: If you have a prop that is a function (e.g. onClick-Handler) you need to make sure that this function reference does not change between rerenders.
Especially with functional components this is often the case, because the functions are often declared inside the component and thus get recreated upon each rerender. This is exactly where `useCallback` is useful.

Usecase for `useCallback` (https://dmitripavlutin.com/dont-overuse-react-usecallback/)

> But in some cases you need to maintain a single function instance between renderings:
> - A functional component wrapped inside React.memo() accepts a function object prop
> - When the function object is a dependency to other hooks, e.g. useEffect(..., [callback])
> - When the function has some internal state, e.g. when the function is debounced or throttled.

## Examples

See: https://github.com/bertoverflow/react-rerender-usecallback

You can start the app and
- have a look at the console-statements
- use the react profiler to explicitly check which components rerender and why

## See also

- https://mokkapps.de/blog/debug-why-react-re-renders-a-component/
- https://albertyuebaixu.medium.com/some-misunderstandings-with-react-memo-usememo-and-usecallback-27449b670d60
- https://dmitripavlutin.com/dont-overuse-react-usecallback/
- https://reactjs.org/docs/react-api.html#reactmemo
- https://reactjs.org/docs/react-api.html#reactpurecomponent
