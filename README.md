# Medical chatbot
## Chatbot based on A.W.S LEX

This process gets done by integrating Lex with Lambda and S3 Bucket
### LEX
- Create an intent.
- Create slots in this intent and assign them with respective values.
- Provide sample utterances for the bot.

### Slots Allotment in lex

| Slots | Values |
| --- | --- |
| Medicinetype | Tablets, Tonic, Lotion |
| Age | Teen, Child, Old |
| Symptoms | Cold, Cough, Allergy, Fever, Headache |

## Lambda Fulfillment

- The Lambda fulfillment will be done in Lex.
- This requires a node.js code which makes the integration of Lambda and S3 with Lex possible.
- This fetches the required data from S3 bucket and sends it to the Lex.

The code is provided here.

## In Progress
