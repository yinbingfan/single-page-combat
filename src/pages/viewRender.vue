<template>
    <div>
        <Table height="200" :columns="columns1" :data="data2"></Table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns1: [
                    {
                        title: "Name",
                        key: "name",
                        render: (h, params) => {
                            return h(
                                "span",
                                {
                                    style: {
                                        fontSize: "18px"
                                    }
                                },
                                params.row.name ? params.row.name : ""
                            );
                        }
                    },
                    {
                        title: "Age",
                        key: "age",
                        render: (h, params) => {
                            return h("input", {
                                domProps: {
                                    value: params.row.age,
                                    disabled: params.row.isEdit
                                },
                                on: {
                                    input: event => {
                                        params.row.age = event.target.value;
                                        params.row.isEdit = false;
                                    }
                                }
                            });
                        }
                    },
                    {
                        title: "Address",
                        key: "address"
                    }
                ],
                data2: [
                    {
                        name: "Jim Green",
                        age: 24,
                        address: "London No. 1 Lake Park",
                        date: "2016-10-01"
                    },
                    {
                        name: "Joe Black",
                        age: 30,
                        address: "Sydney No. 1 Lake Park",
                        date: "2016-10-02"
                    },
                    {
                        name: "Jon Snow",
                        age: 26,
                        address: "Ottawa No. 2 Lake Park",
                        date: "2016-10-04"
                    }
                ]
            };
        },
        methods: {},
        mounted() {
        }
    };
</script>

<style>
</style>