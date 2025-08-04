import createApp from './app';

const PORT = process.env.PORT;
const app = createApp();

app.listen(PORT, () => {
    console.log(`🚀 Server runnig at port ${PORT}`)
});

