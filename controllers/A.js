import action from '../decorators/action'
import controller from '../decorators/controller'

@controller('a')
export default class A {
  @action('list')
  static list = async () => {
    
  }
}
