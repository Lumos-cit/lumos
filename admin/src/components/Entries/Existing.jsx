import React, { useEffect, useState } from "react";
import {
  getAllCurrenciesAndNotes,
  getBestSellers,
} from "../../services/getProducts";
import ResponsivePagination from "react-responsive-pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-pagination/themes/classic.css";
import "../../css/pagination.css";

function Existing({ type, updateEntry }) {
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (type == "Deal of the day") {
    } else if (type == "Best Seller") {
      getBestSellers(setData, setTotalPage, currentPage);
    } else {
      getAllCurrenciesAndNotes(setData, setTotalPage, currentPage);
    }
  }, [type]);

  function pageChanging(val) {
    setCurrentPage(val);
    getAllCurrenciesAndNotes(setData, setTotalPage, val);
  }

  return (
    <div className="w-full mx-auto mt-5 pb-5 bg-slate-900 p-5 h-[90vh] rounded-2xl flex flex-col justify-between">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Image</th>
            <th className="py-2">Price</th>
            <th className="py-2">Type</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <Selection key={i} item={item} updateEntry={updateEntry} />
          ))}
        </tbody>
      </table>
      <div className="pb-10">
        <ResponsivePagination
          current={currentPage}
          total={totalPage}
          onPageChange={(val) => pageChanging(val)}
        />
      </div>
    </div>
  );
}

function Selection({ item, updateEntry }) {
  const [showDelete, setShowDelete] = useState(null);
  function handleUpdate(id) {
    console.log(id);
    updateEntry(id);
  }

  function deleteProduct(id) {
    axios
      .delete(import.meta.env.VITE_API_URL + `/currencies/${id}`)
      .then((response) => {
        console.log("Deleted successfully", response.data);
        setShowDelete(null);
      })
      .catch((error) => {
        console.error("Error in deleting the product", error.message);
      });
  }
  return (
    <tr key={item.id} className="text-center">
      <td className="border-t border-gray-200 py-2">{item.id}</td>
      <td className="border-t border-gray-200 py-2 max-w-[10rem] overflow-hidden text-ellipsis whitespace-nowrap">
        {item.Name}
      </td>
      <td className="border-t border-gray-200 py-2">
        <img
          src={import.meta.env.VITE_IMAGE_URL + item.Image}
          alt={`Product ${item.id}`}
          className="h-10 w-10 rounded-full border-white border-2 object-cover mx-auto"
        />
      </td>
      <td className="border-t border-gray-200 py-2">
        <span>₹</span>
        {item.Price}
      </td>
      <td className="border-t border-gray-200 py-2">{item.Type}</td>
      <td className="border-t border-gray-200 py-2 flex justify-center space-x-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleUpdate(item.id)}
        >
          Update
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowDelete(item.id)}
        >
          Delete
        </button>
      </td>
      {showDelete && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute bg-gray-800 opacity-50 inset-0"></div>
          <div className="bg-white px-8 py-10 rounded shadow-lg z-10 relative">
            <button
              className="absolute top-0 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mt-4 rounded"
              onClick={() => setShowDelete(null)}
            >
              <FontAwesomeIcon
                icon={faClose}
                size="lg"
                className="hover:cursor-pointer text-white"
              />
            </button>
            <h2 className="text-xl text-gray-800 font-bold mb-4 mt-2">
              Do you want to delete the product ?
            </h2>
            <button className="btn btn-error">Delete</button>
          </div>
        </div>
      )}
    </tr>
  );
}

export default Existing;
