module ParseDate (parseDate) where
  
import Data.String.CodeUnits (toCharArray)
  
parseDate :: String -> String
parseDate s = 
  case (toCharArray s) of
    _ -> s