import React,{useState} from 'react'
import PageWrapper from '../components/PageWrapper'
import TopMenu from '../components/TopMenu'
import { templateTabs } from '../tabs/templatesTabs'
import AssingTask from '../components/templatesPage/AssingTask'
import ServiceOperation from '../components/templatesPage/ServiceOperation'
import Department from '../components/templatesPage/Department'

const Templates = () => {
const [activeId, setActiveId] = useState(1);
let content = null;
  switch (activeId) {
    case 1:
      content = <AssingTask />;
      break;
    case 2:
      content = <ServiceOperation />;
      break;
    case 3:
      content = <Department />;
      break;
  }

  return (
    <PageWrapper>
      <TopMenu tabs = {templateTabs} activeId={activeId} setActiveId={setActiveId}/>
      <div>{content}</div>
    </PageWrapper>
  )
}

export default Templates
