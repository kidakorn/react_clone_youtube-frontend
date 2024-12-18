import Nav from '../components/Nav/Nav';
import Sidebar from '../components/Sidebar/Sidebar';
import Contents from '../components/Contents/Contents';

function MainLayout() {
  return (
	<section id="main-layout">
		<Nav></Nav>
		<Sidebar></Sidebar>
		<Contents></Contents>
	</section>
  )
}

export default MainLayout