Feature: Gestão de eventos

    @database
    Scenario: Listar eventos cadastrados
        When I send a "GET" request to "/events"
        Then I should receive response code 200
        And the JSON response should be equal to:
        """
        [{"name": "Rock in Rio", "date":"2024-01-01", "id":"123456"}]
        """