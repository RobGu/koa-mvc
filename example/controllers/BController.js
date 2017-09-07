import { del, get, post, put, service } from '../..';

@service
export default class BController {
  @get()
  static list = async () => {
    return { msg: 'success with b.list'}
  }
}
