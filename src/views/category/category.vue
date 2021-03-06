<template>
  <div class="category">
    <nav-bar class="cate-Nav">
      <template v-slot:center>
        <div class="title">分 类</div>
      </template>
    </nav-bar>
    <slide-bar 
      class="slide-bar" 
      :slideBarList="categoryList" @cateItemClick="cateItemClick">
    </slide-bar>
    <scroll class="subCateScroll">
      <sub-category :subCategoryList="subCategoryList"/>
    </scroll>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue';
import Scroll from '../../components/common/scroll/Scroll.vue';
import slideBar from './childComps/slideBar.vue';
import {getCategoryDate, getSubCategory} from '@/network/category'
import SubCategory from './childComps/SubCategory.vue';
export default {
  components: {NavBar, slideBar, Scroll, SubCategory},
  name: "category",
  data() {
    return {
      currentIndex: 0,
      categoryList: [],
      subCategoryList: []
    }
  },
  methods: {
    getCategory() {
      getCategoryDate().then(res => {
        // console.log(res);
        this.categoryList = res.data.data.category.list
        // console.log(this.categoryList);
        // console.log(this.categoryList[0].maitKey);
        this.getSubCategory(this.categoryList[0].maitKey)
        // console.log(this.subCategoryList);
      })
    },
    getSubCategory(maitKey) {
      getSubCategory(maitKey).then(res => {
        // console.log(res);
        this.subCategoryList = res.data.data.list
      })
    },
    cateItemClick({maitKey, index}) {
      if (this.currentIndex === index) return;
      // this.getCategoryDetail(this.categoryList[index].miniWallkey, "pop");
      this.getSubCategory(maitKey);
      this.currentIndex = index
    }
  },
  mounted() {
    this.getCategory()
  },
  created() {
    
  },
}
</script>

<style scoped>
.category {
  height: 100vh;
  position: relative;
}
.cate-Nav {
  background-color: var(--color-tint);
  color: white;
}
.subCateScroll {
  position: fixed;
  top: 46px;
  bottom: 49px;
  /* height: calc(100% - 93px); */
  left: 100px;
  right: 0;
  overflow: hidden;
}
.title {
  font-size: 17px;
  font-weight: 500;
}

</style>