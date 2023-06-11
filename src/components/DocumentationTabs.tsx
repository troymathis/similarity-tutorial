import { FC } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/Tabs'
import SimpleBar from 'simplebar-react'

const DocumentationTabs: FC = () => {
  return (
  <Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
    <TabsList>
        <TabsTrigger value='nodejs'>NodeJS</TabsTrigger>
        <TabsTrigger value='python'>Python</TabsTrigger>
    </TabsList>
    <TabsContent value='nodejs'>
        {/* <SimpleBar></SimpleBar> */}
        <Code />
    </TabsContent>
    <TabsContent value='nodejs'></TabsContent>
  </Tabs>
  )
}

export default DocumentationTabs