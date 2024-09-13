<template>
  <div class="home">
    <el-select
      v-model="optionVal"
      class="m-2"
      placeholder="Select"
      size="large"
      @change="handleClick"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-transfer v-model="value" :data="data" style="margin-top: 20px" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},

  setup() {
    interface Option {
      key: number;
      label: string;
      disabled: boolean;
    }
    const generateData = () => {
      const data: Option[] = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `Option ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return data;
    };
    const data = ref<Option[]>(generateData());
    const state = reactive({
      optionVal: "",
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
      ],
      value: "",
    });
    const handleClick = (val: any) => {
      console.log(val);
    };

    return {
      ...toRefs(state),
      handleClick,
      data,
    };
  },
});
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  padding: 20px;
}
</style>
