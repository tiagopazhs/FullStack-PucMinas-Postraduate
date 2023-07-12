Feature: Gestão de eventos

    @database
    Scenario: Listar eventos cadastrados
        Given there is the event:
        """
        {"id":"6350a92e88b558783efb4c37", "name": "Rock in Rio", "date":"2024-01-01"}
        """
        When I send a "GET" request to "/events"
        Then I should receive response code 200
        And the JSON response should be equal to:
        """
        [{"name": "Rock in Rio", "date":"2024-01-01", "id":"6350a92e88b558783efb4c37"}]
        """

    @database
    Scenario: Criar um novo evento
        When I send a "POST" request to "/events" with body:
        """
        {"_id":"6350a92e88b558783efb4c37", "name": "Rock in Rio", "date":"2024-01-01"}
        """
        Then I should receive response code 201
        And the JSON response should be equal to:
        """
        {"name": "Rock in Rio", "date":"2024-01-01", "id":"6350a92e88b558783efb4c37"}
        """

    @database
    Scenario: Detalhar um evento existente
        Given there is the event:
        """
        {"id":"6350a92e88b558783efb4c37", "name": "Rock in Rio", "date":"2024-01-01"}
        """
        When I send a "GET" request to "/events/6350a92e88b558783efb4c37"
        Then I should receive response code 200
        And the JSON response should be equal to:
        """
        {"name": "Rock in Rio", "date":"2024-01-01", "id":"6350a92e88b558783efb4c37"}
        """

    @database
    Scenario: Detalhar um evento inexistente
        When I send a "GET" request to "/events/6350a92e88b558783efb4c37"
        Then I should receive response code 404
        And the JSON response should be equal to:
        """
        {"status":404, "error":"Evento não encontrado"}
        """

    @database
    Scenario: Editar um evento existente
        Given there is the event:
        """
        {"id":"6350a92e88b558783efb4c37", "name": "Rock in Rio", "date":"2024-01-01"}
        """
        When I send a "PUT" request to "/events/6350a92e88b558783efb4c37" with body:
        """
        {"name": "AWS Summit", "date":"2024-01-01"}
        """
        Then I should receive response code 200
        And the JSON response should be equal to:
        """
        {"name": "AWS Summit", "date":"2024-01-01","id":"6350a92e88b558783efb4c37"}
        """

    @database
    Scenario: Editar um evento inexistente
        When I send a "PUT" request to "/events/6350a92e88b558783efb4c37" with body:
        """
        {"name": "AWS Summit", "date":"2024-01-01"}
        """
        Then I should receive response code 404
        And the JSON response should be equal to:
        """
        {"status":404, "error":"Evento não encontrado"}
        """

    @database
    Scenario: Remover um evento existente
        Given there is the event:
        """
        {"id":"6350a92e88b558783efb4c37", "name": "Rock in Rio", "date":"2024-01-01"}
        """
        When I send a "DELETE" request to "/events/6350a92e88b558783efb4c37"
        Then I should receive response code 204
        And the response body be empty

    @database
    Scenario: Remover um evento inexistente
        When I send a "DELETE" request to "/events/6350a92e88b558783efb4c37"
        Then I should receive response code 404
        And the JSON response should be equal to:
        """
        {"status":404, "error":"Evento não encontrado"}
        """