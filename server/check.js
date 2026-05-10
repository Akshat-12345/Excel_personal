// Isse replace karke dekho temporary
mongoose.connect("mongodb+srv://akshatbajpai2020_db_user:7wPz7oEAzjuM8Qgf@excelcluster.xxxx.mongodb.net/FinalExcelDB?retryWrites=true&w=majority")
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })