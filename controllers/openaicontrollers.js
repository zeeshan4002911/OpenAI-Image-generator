const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateimage = async (req, res) => {
    const {prompt} = req.body;
    const image_size = "256x256";
    try {
        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: image_size
        })
        const image_url = response.data.data[0].url
        res.status(200).json({
            status: "success",
            url: image_url
        })
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
        res.status(400).json({
            status: "error",
            message: error.message
        })
    }
}

module.exports = generateimage;