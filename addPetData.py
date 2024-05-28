# Lambda function file for adding new pets

import json
import boto3

# Create a DynamoDB object using the AWS SDK
dynamodb = boto3.resource('dynamodb')

# Use the DynamoDB object to select our table
table = dynamodb.Table('petData')

# Define the handler function that the Lambda service will use as an entry point
def lambda_handler(event, context):
    
    # Extract values from the event object we got from the Lambda service and store in variables
    pet_id = event['petId']
    name = event['name']
    breed = event['breed']
    age = event['age']
    
    # Write pet data to the DynamoDB table and save the response in a variable
    response = table.put_item(
        Item={
            'petId': pet_id,
            'name': name,
            'breed': breed,
            'age': age
        }
    )
    
    # Return a properly formatted JSON object
    return {
        'statusCode': 200,
        'body': json.dumps('Pet data saved successfully!')
    }
