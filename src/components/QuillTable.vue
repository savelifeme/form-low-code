<template>
  <div>
    <div id="quillTable"></div>
  </div>
</template>
<script>

// import QuillBetterTable from 'quill-better-table'

// Quill.register({
//   'modules/better-table': QuillBetterTable
// }, true)
export default {
  mounted() {
    // let module = quill.getModule('better-table')
    // console.log('<--- QuillBetterTable --->:>>', QuillBetterTable);
    // window.onload = () => {
    //   const quill = new Quill('#editor-wrapper', {
    //     theme: 'snow',
    //     modules: {
    //       table: false,  // disable table module
    //       'better-table': {
    //         operationMenu: {
    //           items: {
    //             unmergeCells: {
    //               text: 'Another unmerge cells name'
    //             }
    //           }
    //         }
    //       },
    //       keyboard: {
    //         bindings: QuillBetterTable.keyboardBindings
    //       }
    //     }
    //   })

    //   document.body.querySelector('#insert-table')
    //     .onclick = () => {
    //       let tableModule = quill.getModule('better-table')
    //       tableModule.insertTable(3, 3)
    //     }
    // }
  },
};
</script>
<style scoped>
</style>