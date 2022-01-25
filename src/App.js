import Header from './components/Header';
import Banner from './components/Banner';
import SortSearchBar from './components/SortSearchBar';
import CardContainer from './components/CardContainer';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <SortSearchBar />
      <CardContainer />
      <AddRecipeForm />
    </div>
  );
}

export default App;
