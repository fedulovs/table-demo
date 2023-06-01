import Image from 'next/image'
import styles from './page.module.css'
import { BasicTable } from './components/BasicTable'
import { FilteringTable } from './components/FilteringTable'


export default function Home() {
  return (
    <FilteringTable />
  )
}
