import json
import os
import psycopg2

SCHEMA = "t_p81891880_hyperrinse_landing_p"

def handler(event: dict, context) -> dict:
    """Submit a new review with name, rating (1-5), and message."""
    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type", "Access-Control-Max-Age": "86400"}, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = (body.get("name") or "").strip()
    rating = body.get("rating")
    message = (body.get("message") or "").strip()

    if not name or not message:
        return {"statusCode": 400, "headers": {"Access-Control-Allow-Origin": "*"}, "body": json.dumps({"error": "Name and message are required"})}

    if not isinstance(rating, int) or rating < 1 or rating > 5:
        return {"statusCode": 400, "headers": {"Access-Control-Allow-Origin": "*"}, "body": json.dumps({"error": "Rating must be between 1 and 5"})}

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()
    cur.execute(
        f"INSERT INTO {SCHEMA}.reviews (name, rating, message) VALUES (%s, %s, %s) RETURNING id",
        (name, rating, message)
    )
    new_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        "statusCode": 201,
        "headers": {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json"},
        "body": json.dumps({"success": True, "id": new_id})
    }
