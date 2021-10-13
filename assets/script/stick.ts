import { _decorator, Component, Node, v2 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Stick
 * DateTime = Wed Oct 13 2021 14:53:36 GMT+0800 (中国标准时间)
 * Author = suedar
 * FileBasename = stick.ts
 * FileBasenameNoExtension = stick
 * URL = db://assets/script/stick.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

@ccclass('Stick')
export class Stick extends Component {
  // [1]
  // dummy = '';

  // [2]
  // @property
  // serializableDummy = 0;
  @property
  Rocker: {
    type: Node;
    default: null;
  };

  onTouchStart() {}

  onTouchEnd() {}

  onTouchMove() {}

  onTouchCancel() {}

  start() {
    this.node.on(
      Node.EventType.TOUCH_START,
      function (e) {
        var w_pos = e.getLocation();
        var pos = this.node.convertToNodeSpaceAR(w_pos);
        var len = pos.mag(); // 获取向量长度
        if (len > this.Max_r) {
          pos.x = (this.Max_r * pos.x) / len;
          pos.y = (this.Max_r * pos.y) / len;
        }
        this.Rocker.setPosition(pos);
      },
      this
    );

    this.node.on(
      Node.EventType.TOUCH_MOVE,
      function (e) {
        var w_pos = e.getLocation();
        var pos = this.node.convertToNodeSpaceAR(w_pos);
        var len = pos.mag();
        if (len > this.Max_r) {
          pos.x = (this.Max_r * pos.x) / len;
          pos.y = (this.Max_r * pos.y) / len;
        }
        this.Rocker.setPosition(pos);
      },
      this
    );

    this.node.on(
      Node.EventType.TOUCH_END,
      function (e) {
        this.Rocker.setPosition(v2(0, 0));
      },
      this
    );

    this.node.on(
      Node.EventType.TOUCH_CANCEL,
      function (e) {
        this.Rocker.setPosition(v2(0, 0));
      },
      this
    );
    // [3]
  }

  // update (deltaTime: number) {
  //     // [4]
  // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
