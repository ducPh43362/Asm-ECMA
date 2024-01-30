import { useEffect, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ProductPage from './pages/admin/product';
import DashBoardPage from './pages/admin/DashBoard';
import { Route, Routes } from 'react-router-dom';
import { UpdateProductById, getProduct } from './api/product';
import { RemoveProductById } from './api/product';
import { ToastContainer, toast } from 'react-toastify';
import { AddProduct } from './api/product';
import ProductAddPage from './pages/admin/Product-Add';
import ProductUpdatePage from './pages/admin/Product-Update';
import LayoutWebsite from './components/layouts/layoutWebsite';
import LayoutAdmin from './components/layouts/layoutAdmin';
import ProductWebsitePage from './pages/ProductWebsitePage';


function App() {
  // Danh sách sản phẩm
  const [productList, setProductList] = useState([]);
  useEffect(() => {
      (async() => {
        setProductList(await getProduct())
      })()
  },[]);

  // Xóa sản phẩm
  const onHandleRemove = async (id) => {
    const confirm = window.confirm('Bạn có chắc chắn xóa ?');
    if(confirm){
      try {
        await RemoveProductById(id);
        toast.success('Xóa thành công');
        // rerender lại page
        setProductList(productList.filter(product => product.id !== id));
      } catch (error) {
        toast.error('Xóa thất bại');
      }
    }
  }

  // Thêm sản phẩm
  const AddProductNew = async (add) => {
    try {
      const data = await AddProduct(add);
      toast.success('Thêm thành công');
      setProductList([...productList,data]);
    } catch (error) {
        toast.error(error);
    }
  }

  // Sửa sản phẩm
  const UpdateProduct = async (update) => {
      try {
          const data = await UpdateProductById(update);
          toast.success('Sửa thành công');
          setProductList(productList.map((product) => (product.id === update.id ? update : product)))
          toast.error(error);
      }catch(error){
          toast.error(error);
      }
  }

  return (
    <>
      <Routes>
          <Route path='/' element={<LayoutWebsite />} > 
              <Route index element={<h1>Home Page</h1>} />
              <Route path='about' element={<h1>About Page</h1>} />
              <Route path='products' element={<ProductWebsitePage  product={productList}/>} />
          </Route>
          <Route path='admin' element={<LayoutAdmin />}>
                  <Route index element={<DashBoardPage />} />
                  <Route path='product' element={<ProductPage product={productList}  onRemove={onHandleRemove}/>} />
                  <Route path='product/add' element={<ProductAddPage onAdd={AddProductNew} />} />
                  <Route path='product/:id/update' element={<ProductUpdatePage onUpdate={UpdateProduct}  />}/>
          </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
