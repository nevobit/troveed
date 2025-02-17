import { createContext, ReactNode, useContext } from 'react';
import styles from './Table.module.css';

export interface ColumnDef<T> {
    header: string;
    accessor: keyof T | ((item: T) => ReactNode),
    width?: string;
    Cell?: (props: {value: unknown; row: T}) => ReactNode,
}

interface TableContextProps<T> {
    columns: ColumnDef<T>[];
    data: T[];   
}

const TableContext = createContext<TableContextProps<any> | undefined>(undefined)

interface TableProps<T>{
    children: ReactNode;
    columns: ColumnDef<T>[];
    data: T[];
}

export function Table<T>({ columns, data, children }: TableProps<T>) {
  return (
    <TableContext.Provider value={{
        columns,
        data
    }} >
        <div className={styles.table} role='table' >
            {children}
        </div>
    </TableContext.Provider>

  )
}

function Header<T>() {
    const context = useContext(TableContext) as TableContextProps<T>;
    const { columns } = context;
    return (
        <div className={`${styles.commonRow} ${styles.header}`} role='row'>
            {columns.map((column, index) => (
                <div key={index} style={{
                    width: column.width
                }} >
                    {column.header}
                </div>
            ))}
        </div>
    )
}

interface RowProps<T> {
    item: T;
}

function Row<T>({ item }: RowProps<T>) {
    const context = useContext(TableContext) as TableContextProps<T>;
    
    const { columns } = context;
    return(
        <div className={`${styles.row} ${styles.commonRow} `} role='row' >
            {columns.map((column, index) => {
                const value = item[column.accessor as keyof T]
                return (
                    <div style={{
                        width: column.width
                    }} >{value as ReactNode}</div>
                )
            })}
        </div>
    )
}

function Body<T>() {
    const context = useContext(TableContext) as TableContextProps<T>;
    
    const { data } = context;

    
    return (
        <section className={styles.body} >
                {data.map((item, index) => (
                    <Row key={index} item={item} />
                ))}
        </section>
    )
}

function Footer<T>() {
    return (
        <div className={styles.header} >

        </div>
    )
}

Table.Header = Header;
Table.Body = Body;
Table.Footer = Footer;