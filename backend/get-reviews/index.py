import json
import os
import psycopg2

SCHEMA = "t_p81891880_hyperrinse_landing_p"

def handler(event: dict, context) -> dict:
    """Return all reviews ordered by newest first."""
    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, OPTIONS", "Access-Control-Allow-Headers": "Content-Type", "Access-Control-Max-Age": "86400"}, "body": ""}

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()
    cur.execute(f"SELECT id, name, rating, message, created_at FROM {SCHEMA}.reviews ORDER BY created_at DESC")
    rows = cur.fetchall()
    cur.close()
    conn.close()

    reviews = [
        {"id": r[0], "name": r[1], "rating": r[2], "message": r[3], "created_at": r[4].isoformat()}
        for r in rows
    ]

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json"},
        "body": json.dumps({"reviews": reviews})
    }
