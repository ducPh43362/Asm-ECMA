import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
  return (
    <div>
        <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Outlet />
              {/* <Routes>
                  <Route path='/' element={<h1>Home Page</h1>} />
                  <Route path='admin' element={<DashBoardPage />} />
                  <Route path='admin/product' element={<ProductPage product={productList}  onRemove={onHandleRemove}/>} />
                  <Route path='admin/product/add' element={<ProductAddPage onAdd={AddProductNew} />} />
                  <Route path='admin/product/:id/update' element={<ProductUpdatePage onUpdate={UpdateProduct}  />}/>
              </Routes> */}
            </main>
          </div>
        </div>
    </div>
    </div>
  )
}

export default LayoutAdmin