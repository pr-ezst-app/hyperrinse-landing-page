import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const GET_REVIEWS_URL = "https://functions.poehali.dev/f5e9461f-8187-4f97-96c7-38948961f24d";
const SUBMIT_REVIEW_URL = "https://functions.poehali.dev/86135a14-6f6a-4a6d-b353-8b9a81e8f332";

interface Review {
  id: number;
  name: string;
  rating: number;
  message: string;
  created_at: string;
}

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [reviewForm, setReviewForm] = useState({ name: "", rating: 0, message: "" });
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [reviewError, setReviewError] = useState("");

  useEffect(() => {
    fetch(GET_REVIEWS_URL)
      .then((r) => r.json())
      .then((data) => setReviews(data.reviews || []))
      .catch(() => {});
  }, []);

  const handleReviewSubmit = async () => {
    setReviewError("");
    if (!reviewForm.name.trim() || !reviewForm.message.trim()) {
      setReviewError("Please fill in your name and review.");
      return;
    }
    if (reviewForm.rating === 0) {
      setReviewError("Please select a star rating.");
      return;
    }
    setReviewSubmitting(true);
    try {
      const res = await fetch(SUBMIT_REVIEW_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewForm),
      });
      if (res.ok) {
        const fresh = await fetch(GET_REVIEWS_URL).then((r) => r.json());
        setReviews(fresh.reviews || []);
        setReviewForm({ name: "", rating: 0, message: "" });
        setReviewSubmitted(true);
        setTimeout(() => setReviewSubmitted(false), 4000);
      } else {
        setReviewError("Something went wrong. Please try again.");
      }
    } catch {
      setReviewError("Something went wrong. Please try again.");
    }
    setReviewSubmitting(false);
  };

  return (
    <section id="reviews" className="section-pad bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">Reviews</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">What our customers say</h2>
          <p className="text-muted-foreground text-lg">Real reviews from real Leaside neighbours.</p>
        </div>

        {/* Review Cards */}
        {reviews.length === 0 ? (
          <p className="text-center text-muted-foreground mb-10">No reviews yet — be the first!</p>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-6">
              {(showAllReviews ? reviews : reviews.slice(0, 3)).map((r) => (
                <div key={r.id} className="bg-background border border-border rounded-2xl p-5 flex flex-col gap-3">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Icon key={s} name="Star" size={16} className={s <= r.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/30"} />
                    ))}
                  </div>
                  <p className="text-sm text-foreground leading-relaxed flex-1">"{r.message}"</p>
                  <p className="text-xs text-muted-foreground font-semibold">— {r.name}</p>
                </div>
              ))}
            </div>
            {reviews.length > 3 && (
              <div className="text-center mb-10">
                <button
                  onClick={() => setShowAllReviews(!showAllReviews)}
                  className="text-brand font-semibold text-sm hover:underline"
                >
                  {showAllReviews ? "Show less" : `View all ${reviews.length} reviews`}
                </button>
              </div>
            )}
          </>
        )}

        {/* Submit Review Form */}
        <div className="max-w-lg mx-auto bg-background border border-border rounded-2xl p-8">
          <h3 className="font-display text-xl font-bold mb-5">Leave a review</h3>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Your Name</label>
              <input
                type="text"
                placeholder="Jane Doe"
                value={reviewForm.name}
                onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onMouseEnter={() => setHoverRating(s)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setReviewForm({ ...reviewForm, rating: s })}
                    className="p-0.5 focus:outline-none"
                  >
                    <Icon
                      name="Star"
                      size={28}
                      className={s <= (hoverRating || reviewForm.rating) ? "text-yellow-400 fill-yellow-400 transition-colors" : "text-muted-foreground/30 transition-colors"}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Your Review</label>
              <textarea
                rows={3}
                placeholder="Tell others about your experience..."
                value={reviewForm.message}
                onChange={(e) => setReviewForm({ ...reviewForm, message: e.target.value })}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition resize-none"
              />
            </div>
            {reviewError && <p className="text-red-500 text-sm">{reviewError}</p>}
            {reviewSubmitted && <p className="text-green-500 text-sm font-medium">Thanks for your review!</p>}
            <button
              onClick={handleReviewSubmit}
              disabled={reviewSubmitting}
              className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-3.5 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-brand/25 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {reviewSubmitting ? "Submitting..." : "Submit Review"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
