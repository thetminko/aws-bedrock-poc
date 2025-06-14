import { BedrockClient, ListFoundationModelsCommand } from "@aws-sdk/client-bedrock";

const client = new BedrockClient({
  region: 'ca-central-1'
})

async function listFoundationModels() {
  const response = await client.send(new ListFoundationModelsCommand())
  response.modelSummaries?.map(model => {
    console.log(`Model ${model.modelId} - ${model.modelName}`);
  });
}

listFoundationModels()
  .then(() => console.log('Done'))
  .catch(err => console.error('Error listing foundation models:', err));

