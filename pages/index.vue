<script setup>
import TableLite from "vue3-table-lite";
const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "ID",
      field: "id",
      width: "3%",
      sortable: true,
      isKey: true,
    },
    {
      label: "Name",
      field: "name",
      width: "10%",
      sortable: true,
    }, 
    {
      label: "Email",
      field: "email",
      width: "15%",
      sortable: true,
    },
  ],
  rows: [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Doe", email: "jane.doe@example.com" },
    { id: 3, name: "Richard Roe", email: "richard.roe@example.com" },
  ],
  totalRecordCount: 0,
  sortable: {
    order: "id",
    sort: "asc",
  },
});
const doSearch = (offset, limit, order, sort) => {
  // table.isLoading = true;
  let url =
    "https://www.example.com/api/some_endpoint?offset=" +
    offset +
    "&limit=" +
    limit +
    "&order=" +
    order +
    "&sort=" +
    sort;
  // axios.get(url).then((response) => {
  //   table.rows = response.rows;
  //   table.totalRecordCount = response.count;
  //   table.sortable.order = order;
  //   table.sortable.sort = sort;
  // });
};
const tableLoadingFinish = (elements) => {
  table.isLoading = false;
};
doSearch(0, 10, "id", "asc");
</script>
<template>
  <div>
    <table-lite
      :is-loading="table.isLoading"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"
      :sortable="table.sortable"
      @do-search="doSearch"
      @is-finished="tableLoadingFinish"
    ></table-lite>
  </div>
</template>
<style scoped></style>
