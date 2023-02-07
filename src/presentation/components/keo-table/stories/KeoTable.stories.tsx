import { ComponentStory, ComponentMeta } from "@storybook/react";
import KeoTable from "../KeoTable";

interface IProduct {
  name: string;
  price: number;
}

export default {
  title: 'Keo/Table',
  component: KeoTable,
  args: {
    dense: false,
    sticky: false,
    rows: []
  }
} as ComponentMeta<typeof KeoTable<IProduct>>

const Template: ComponentStory<typeof KeoTable<IProduct>> = (args) => <KeoTable<IProduct> {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Products',
  columns: [
    {
      field: 'name',
      headerName: 'Name',
      type: 'string'
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      align: 'right',
      render: (params) => '$' + params.row.price
    }
  ]
}