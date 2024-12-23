import IndexField from './components/IndexField'
import DetailField from './components/DetailField'

Nova.booting((app, store) => {
  app.component('index-nova-avatar-field', IndexField)
  app.component('detail-nova-avatar-field', DetailField)
})
