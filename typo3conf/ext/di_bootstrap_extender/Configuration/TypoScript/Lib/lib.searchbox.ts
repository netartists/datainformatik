lib.searchbox = COA_INT
lib.searchbox {
    10 = TEXT
    10 {
        typolink.parameter = {$plugin.tx_indexedsearch.searchUID}
        typolink.additionalParams = &tx_indexedsearch_pi2[action]=search&tx_indexedsearch_pi2[controller]=Search
        typolink.returnLast = url
        wrap = <form id="tx_indexedsearch" action="|" method="post">
    }

    20 = COA
    20 {
        10 = TEXT
        10.data = GPvar : tx_indexedsearch |sword
        10.htmlSpecialChars = 1
        10.wrap = <input id="header-searchboxinput" name="tx_indexedsearch_pi2[search][sword]" value="|" class="searchField" placeholder="{$plugin.tx_indexedsearch.placeholder}" type="text" required/>
    }

    30 = TEXT
    30.value (
        <input type="hidden" name="tx_indexedsearch_pi2[search][_sections]" value="0" />
        <input type="hidden" name="tx_indexedsearch_pi2[pointer]" value="0" />
        <input type="hidden" name="tx_indexedsearch_pi2[ext]" value="0" />
        <input type="submit" value="{$plugin.tx_indexedsearch.button}" name="tx_indexedsearch_pi2[search][submitButton]">
    )

    40 = TEXT
    40.value = </form>
}
