import axios from "axios";

const limit = 2;

export function getAllCurrenciesAndNotes(setData, setTotalPage, currentPage) {
  const offset = limit * (currentPage - 1);

  axios
    .get(
      import.meta.env.VITE_API_URL +
        `/currencies?offset=${offset}&limit=${limit}`
    )
    .then((res) => {
      console.log(res.data);
      const totalPage = Math.ceil(res.data.meta.total / limit);
      setTotalPage(totalPage);
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err);
      const error = err.response.data.error.message;
      //   showToast(toast, "error", error);
    });
}

export function getBestSellers(setData, setTotalPage, currentPage) {
  const offset = limit * (currentPage - 1);

  axios
    .get(
      import.meta.env.VITE_API_URL +
        `/currencies?bestSeller=true&offset=${offset}&limit=${limit}`
    )
    .then((res) => {
      console.log(res.data);
      const totalPage = Math.ceil(res.data.meta.total / limit);
      setTotalPage(totalPage);
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err);
      const error = err.response.data.error.message;
      //   showToast(toast, "error", error);
    });
}

// export function getDealOftheDay(setData, setTotalPage, currentPage) {
//   const offset = limit * (currentPage - 1);

//   axios
//     .get(
//       import.meta.env.VITE_API_URL +
//         `/currencies?bestSeller=true&offset=${offset}&limit=${limit}`
//     )
//     .then((res) => {
//       console.log(res.data);
//       const totalPage = Math.ceil(res.data.meta.total / limit);
//       setTotalPage(totalPage);
//       setData(res.data.data);
//     })
//     .catch((err) => {
//       console.log(err);
//       const error = err.response.data.error.message;
//       //   showToast(toast, "error", error);
//     });
// }
