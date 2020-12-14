/* * @Author: mellow * @Date: 2020-12-10 18:18:54 * @Last Modified by: mellow *
@Last Modified time: 2020-12-10 18:18:54 */

<template>
  <div>
    <el-button type="success" @click="handleOpenMessage"
      >打开消息提示</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String,
      default: "mellow"
    }
  },
  setup() {
    // console.log(props, "props");
    // console.log(context, "context");
    const { proxy }: any = getCurrentInstance();
    const handleOpenMessage = () => {
      console.log("openmessage");
      proxy.$message("mesage");
      proxy.sum(1).sumOf();
      proxy.sum(2, 3, 4).sumOf();
      proxy
        .sum(4)(5)(6)
        .sumOf();
      proxy
        .sum(7)(
          8,
          9
        )(10)
        .sumOf();
    };
    const sum = (...args: any[]) => {
      const nums = [...args];
      const add = (...addArgs: any[]) => {
        nums.push(...addArgs);
        return add;
      };
      add.sumOf = () => {
        console.log(nums.reduce((a, b) => a + b));
        return nums.reduce((a, b) => a + b);
      };
      return add;
    };
    return { handleOpenMessage, sum };
  }
});
</script>

<style scoped lang="scss">
div {
  background-color: skyblue;
}
</style>
