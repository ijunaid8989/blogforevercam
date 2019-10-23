export default {
  name: 'companyReference',
  type: 'object',
  title: 'Company reference',
  fields: [
    {
      name: 'company',
      type: 'reference',
      to: [
        {
          type: 'company'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'company.name',
      media: 'company.image.asset'
    }
  }
}
