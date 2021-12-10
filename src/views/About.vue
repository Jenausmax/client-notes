<template>
  <div class="about">
    <h1>This is an about page</h1>
    <notes-table></notes-table>
  </div>
</template>
<script>
import NotesTable from '../components/NotesTable.vue'
import Component from "vue-class-component";

@Component({
  components: {NotesTable}
})
export default class About{
}
</script>
