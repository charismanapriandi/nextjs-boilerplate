import Head from 'next/head'
import Store from 'core/store'
import { AccountStore } from 'domain/account/account.store'
import { observer } from 'mobx-react-lite'
import { Layout } from '@presentation'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

function Home() {
  const {account} = Store.get<AccountStore>(AccountStore.name)
  
  return (
    <Layout.DrawerLayout title='Dashboard'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="alternate" href={`${DOMAIN}`} hrefLang="x-default" />
        <link rel="alternate" href={`${DOMAIN}/en`} hrefLang="en" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout.DrawerLayout>
  )
}

export default observer(Home);