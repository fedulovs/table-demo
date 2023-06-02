import Image from 'next/image'
import styles from './page.module.css'
import { BasicTable } from './components/BasicTable'
import { FilteringTable } from './components/FilteringTable'
import { PaginationTable } from './components/PaginationTable'


export default function Home() {
  return (
    <PaginationTable />
  )
}
