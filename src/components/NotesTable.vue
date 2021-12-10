<template>
  <v-data-table
    dense
    :headers="headers"
    :items="notes"
    item-key="id"
    class="elevation-1"
  ></v-data-table>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import iNote from '@/models/Note'

@Component
export default class NotesTable extends Vue {
  private headers: Array<any> = new Array<any>();
  private notes: Array<iNote> = new Array<iNote>();

  created () {
    this.headers.push({
        text: 'Notes',
        align: 'start',
        sortable: true,
        value: 'id'
      },
      { text: 'Descriptions', value: 'description' },
      { text: 'Date', value: 'date' },
      { text: 'Name', value: 'name' })

    this.getNotes()
  }

  private getNotes (): void{
    this.$http.get('Note')
    .then(response => {
      return response.json()
    })
    .then(note => {
      for (const item of note) {
        this.notes.push(item as iNote)
      }
    })
  }
}

</script>

<style scoped>

</style>
