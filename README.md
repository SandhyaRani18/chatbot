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

https://github.com/ManojRamKumar/chatbot/blob/master/index.js

## In Progress

![Amazon Lex - Google Chrome 03-02-2020 15_26_06 (2)](https://user-images.githubusercontent.com/60767617/75461534-f51e4180-59a8-11ea-90f0-c796b4aa995c.png)

![Amazon Lex - Google Chrome 27-02-2020 20_07_06](https://user-images.githubusercontent.com/60767617/75461872-60681380-59a9-11ea-824f-7185bca108bb.png)
