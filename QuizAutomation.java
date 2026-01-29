import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.io.FileHandler; 
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.Select;

import java.io.File;
import java.io.IOException;
import java.time.Duration;
import java.util.List;

public class QuizAutomation {

    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        JavascriptExecutor js = (JavascriptExecutor) driver;

        try {
            System.out.println("Starting Automation Test...");

           
            String projectPath = System.getProperty("user.dir");
            String url = "file:///" + projectPath.replace("\\", "/") + "/login.html";
            driver.get(url);

            System.out.println("Page Opened: " + driver.getTitle());
            takeScreenshot(driver, "0_LoginPage");

          
            WebElement userField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("username")));
            userField.sendKeys("admin");

            WebElement passField = driver.findElement(By.id("password"));
            passField.sendKeys("password");

            WebElement loginBtn = driver.findElement(By.id("loginBtn"));
            loginBtn.click();
            System.out.println("Logged in successfully");

          
            wait.until(ExpectedConditions.urlContains("index.html"));
            System.out.println("Navigated to Setup Page");
            takeScreenshot(driver, "1_LandingPage");

           
            WebElement categoryDropdown = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("category")));
            new Select(categoryDropdown).selectByVisibleText("Java");

            WebElement difficultyDropdown = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("difficulty")));
            new Select(difficultyDropdown).selectByVisibleText("Easy");

            WebElement startBtn = wait.until(ExpectedConditions.elementToBeClickable(By.id("startQuiz")));
            startBtn.click();
            System.out.println("Clicked Start Quiz");

      
            wait.until(ExpectedConditions.urlContains("quiz.html"));
            System.out.println("Navigated to Quiz Page");

         
            int totalQuestions = 5; 
            
            for (int i = 1; i <= totalQuestions; i++) {
                System.out.println("\n--- Processing Question " + i + " ---");

                WebElement progressElem = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("question-progress")));
                String progressText = progressElem.getText();
                
               
                if (i == 1) {
                    try {
                        String[] parts = progressText.split(" of ");
                        if (parts.length == 2) totalQuestions = Integer.parseInt(parts[1].trim());
                    } catch (Exception e) {}
                    
                   
                    takeScreenshot(driver, "2_QuestionDisplay"); 
                }

                if (i > 1) {
                    wait.until(ExpectedConditions.textToBePresentInElementLocated(By.id("question-progress"), "Question " + i + " of " + totalQuestions));
                }

                WebElement questionText = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("questionText")));
                System.out.println("Question: " + questionText.getText());

                List<WebElement> options = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.className("option-btn")));
                
                
                options.get(0).click(); 
                System.out.println("Selected Option: " + options.get(0).getText());

                if (i < totalQuestions) {
                    WebElement nextBtn = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("nextBtn")));
                    js.executeScript("arguments[0].scrollIntoView(true);", nextBtn);
                    try { Thread.sleep(500); } catch (InterruptedException e) {}
                    
                    try { nextBtn.click(); } 
                    catch (Exception e) { js.executeScript("arguments[0].click();", nextBtn); }
                } else {
                    WebElement submitBtn = wait.until(ExpectedConditions.elementToBeClickable(By.id("submitBtn")));
                    submitBtn.click();
                    System.out.println("Clicked Submit Quiz");
                }
            }

           
            System.out.println("\n--- Verifying Results ---");
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("resultScore")));
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("scoreChart")));
            
            
            takeScreenshot(driver, "3_ResultAnalysis"); 

            System.out.println("Charts Verified: Visible");
            System.out.println("TEST PASSED ✅");

        } catch (Exception e) {
            System.err.println("TEST FAILED ❌");
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }

  
    public static void takeScreenshot(WebDriver driver, String fileName) {
        try {
            File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        
            String path = System.getProperty("user.dir") + "/screenshots/" + fileName + ".png";
           
            new File(path).getParentFile().mkdirs();
            FileHandler.copy(scrFile, new File(path));
            System.out.println("Screenshot saved: " + fileName);
        } catch (IOException e) {
            System.err.println("Failed to save screenshot: " + e.getMessage());
        }
    }
}
