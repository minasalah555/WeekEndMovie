// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MovieReview {
    struct Review {
        uint256 movieId;
        uint8 rating;
        string comment;
        address reviewer;
    }

    Review[] public reviews;

    event NewReview(uint256 indexed movieId, uint8 rating, address indexed reviewer);

    function addReview(uint256 _movieId, uint8 _rating, string memory _comment) public {
        require(_rating >= 1 && _rating <= 5, "Rating must be between 1 and 5");
        reviews.push(Review(_movieId, _rating, _comment, msg.sender));
        emit NewReview(_movieId, _rating, msg.sender);
    }

    function getReviewCount() public view returns (uint256) {
        return reviews.length;
    }
}
