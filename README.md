# Rule
- 路由规则 /{controller}/{action}. action 可以通过 @get('xxx')自定义. 默认为方法名;
## action
- 会收到2个参数 params (query < parameter < data), ctx;
- 支持 async 方法
- return json, html

## Example
```sh
npm run example
```