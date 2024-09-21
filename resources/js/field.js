import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-nova-avatar-field', IndexField)
  app.component('detail-nova-avatar-field', DetailField)
  app.component('form-nova-avatar-field', FormField)
})
