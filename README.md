

##  **Exploratory Testing Strategy**

###  **Scope**

Focus areas:

* Login (using `problem_user` and `standard_user`)
* Add/Remove products from cart
* Filter products
* View Cart
* Checkout flow

###  **Test Techniques Used**

| Technique                                    | Why it was chosen                                            |
| -------------------------------------------- | ------------------------------------------------------------ |
| **Session-based exploratory testing (SBTM)** | To keep tests time-boxed and focused on one goal at a time.  |
| **Error guessing**                           | Especially for `problem_user`, based on known edge behavior. |
| **Use case-based testing**                   | To simulate realistic shopping user behavior.                |



##  **Exploratory Testing Observations**

| **Feature**                 | **Findings**                                                                                       |
| --------------------------- | -------------------------------------------------------------------------------------------------- |
| **Login (`standard_user`)** | Success. Navigates to products page.                                                               |
| **Login (`problem_user`)**  | Product images broken. Some items may behave incorrectly (intentional for testing).                |
| **Add/Remove from Cart**    | Working as expected for both users. Cart badge updates accurately.                                 |
| **Filter Products**         | All options work (A-Z, Z-A, Price low-high, Price high-low). However, filter resets on navigation. |
| **View Cart**               | Cart page displays correct products with pricing.                                                  |
| **Checkout**                | Multi-step form behaves correctly, though allows proceeding with empty fields in some edge cases.  |

---

##  **Cypress Automation Plan**

###  **High-Priority Flows (Automated)**

1.  Login with valid credentials (standard\_user)
2.  Add product to cart and verify cart badge
3.  Remove product from cart
4.  Apply product filters
5.  View cart and assert cart contents
6.  Perform checkout flow with sample user data

---

## 📁 **Folder Structure Suggestion**

```
cypress/
  └─ e2e/
       ├─ login.cy.js
       ├─ cart.cy.js
       ├─ filter.cy.js
       ├─ checkout.cy.js
cypress.config.js
README.md
```

---

```

### **Tested Scenarios**

| Test Case | File             | Description                    |
| --------- | ---------------- | ------------------------------ |
| Login     | `login.cy.js`    | Valid login and UI assertion   |
| Cart      | `cart.cy.js`     | Add/remove and badge update    |
| Filter    | `filter.cy.js`   | Apply and assert sorting logic |
| Checkout  | `checkout.cy.js` | End-to-end checkout flow       |

###  **Notes & Observations**

* `problem_user` produces image misalignment.
* Checkout page does not validate empty user info on first screen (could be improved).
* Filter resets on back navigation — potential UX flaw.


###  **Blockers**

* No "Forgot Password" flow for login testing.
* Cannot change quantity of items in cart.
* User Cannot proceed to payment – First Name and Last Name fields are malfunctioning (probem_user)
