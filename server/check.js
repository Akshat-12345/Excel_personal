// check.js
// Niche wali line mein apni actual Gemini API key paste karna
const apiKey = "AIzaSyA5vq4OuTTeAXQ0ej9JfeA55N7T9PIax0M"; 

fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    if (!data.models) {
        console.log("❌ API ne koi model return nahi kiya. Error:", data);
        return;
    }
    const availableModels = data.models
      .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent"))
      .map(m => m.name.replace("models/", ""));
      
    console.log("✅ Aapki API key par strictly yeh models allowed hain:\n", availableModels);
  })
  .catch(err => console.error("Error fetching models:", err));