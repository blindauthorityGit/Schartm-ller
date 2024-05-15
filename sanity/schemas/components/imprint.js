export default {
    name: "impressum",
    type: "document",
    title: "impressum",
    fields: [
        {
            title: "Description",
            name: "description",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};
