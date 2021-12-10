<template>
  <div class="about">
    <h1>Notes</h1>
    <notes-table></notes-table>
  </div>
</template>
<script>
import NotesTable from '../components/NotesTable.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: { NotesTable }
})
export default class About extends Vue {
}
</script>
