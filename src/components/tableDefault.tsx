import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface IDataMock{
  id: number
  name: string
  icon: string
  price: string
  historic_price: string,
  variation_price: string
}

interface ITableCellDefault {
  data: string | JSX.Element
  classname?: string
}

function TableCellDefault({data, classname}: ITableCellDefault): JSX.Element {
  return (
    <TableCell className={`text-center h-[44px] p-0 pb-1`}>
      <p className={`bg-primary-foreground flex items-center justify-center border-solid border-[1px] border-secondary rounded-md h-[100%] text-center ${classname}`}>{data}</p>
    </TableCell>
  )
}

export default function TableDefault() {
  const items: IDataMock[] = [
    {
      id: 1,
      name: 'Cheese',
      icon: '',
      price: '589',
      historic_price: '2.569',
      variation_price: '58%'
    },
    {
      id: 2,
      name: 'Cheese',
      icon: '',
      price: '589',
      historic_price: '2.569',
      variation_price: '58%'
    },
    {
      id: 3,
      name: 'Cheese',
      icon: '',
      price: '589',
      historic_price: '2.569',
      variation_price: '58%'
    },
    {
      id: 4,
      name: 'Cheese',
      icon: '',
      price: '589',
      historic_price: '2.569',
      variation_price: '58%'
    },
    {
      id: 5,
      name: 'Cheese',
      icon: '',
      price: '589',
      historic_price: '2.569',
      variation_price: '58%'
    },
    {
      id: 6,
      name: 'Cheese',
      icon: '',
      price: '589',
      historic_price: '2.569',
      variation_price: '58%'
    },
    {
      id: 7,
      name: 'Cheese',
      icon: '',
      price: '589',
      historic_price: '2.569',
      variation_price: '58%'
    },
    {
      id: 8,
      name: 'Cheese',
      icon: '',
      price: '589',
      historic_price: '2.569',
      variation_price: '58%'
    },
    {
      id: 9,
      name: 'Cheese',
      icon: '',
      price: '589',
      historic_price: '2.569',
      variation_price: '58%'
    },
    {
      id: 10,
      name: 'Cheese',
      icon: '',
      price: '589',
      historic_price: '2.569',
      variation_price: '58%'
    },
  ];

  return (
    <Table className="table-default">
      <TableHeader className="sticky top-0">
        <TableRow>
          <TableHead className="border-solid border-4 rounded-xl text-center h-[62px] border-secondary">Item</TableHead>
          <TableHead className="border-solid border-4 rounded-xl text-center h-[62px] border-secondary"></TableHead>
          <TableHead className="border-solid border-4 rounded-xl text-center h-[62px] border-secondary">Preço Atual</TableHead>
          <TableHead className="border-solid border-4 rounded-xl text-center h-[62px] border-secondary">Histórico do Preço</TableHead>
          <TableHead className="border-solid border-4 rounded-xl text-center h-[62px] border-secondary">Variação de Preço</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
          {items.map((item: IDataMock, i: number) => {
            return (
            <TableRow key={i}>
              <TableCellDefault data={item.name} />
              <TableCellDefault data={item.icon} classname="font-light"/>
              <TableCellDefault data={item.price} classname="font-light"/>
              <TableCellDefault data={item.historic_price}  classname="border-white font-light"/>
              <TableCellDefault data={item.variation_price} classname="font-light"/>
            </TableRow>
          )})}
      </TableBody>
    </Table>
  );
}
