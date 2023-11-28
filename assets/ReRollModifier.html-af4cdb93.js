import{_ as e,o,c as r,e as t}from"./app-e7f8d9af.js";const d={},i=t('<h1 id="rerollmodifier" tabindex="-1"><a class="header-anchor" href="#rerollmodifier" aria-hidden="true">#</a> ReRollModifier</h1><p><a name="ReRollModifier"></a></p><h2 id="rerollmodifier-⇐-comparisonmodifier" tabindex="-1"><a class="header-anchor" href="#rerollmodifier-⇐-comparisonmodifier" aria-hidden="true">#</a> ReRollModifier ⇐ <code>ComparisonModifier</code></h2><p>A <code>ReRollModifier</code> re-rolls dice that match a given test, and replaces the new value with the old one.</p><p><strong>Kind</strong>: global class<br><strong>Extends</strong>: <code>ComparisonModifier</code><br><strong>See</strong>: <a href="ExplodeModifier">ExplodeModifier</a> if you want to keep the old value as well</p><ul><li><a href="#ReRollModifier">ReRollModifier</a> ⇐ <code>ComparisonModifier</code><ul><li><a href="#new_ReRollModifier_new">new ReRollModifier([once], [comparePoint])</a></li><li><a href="#ReRollModifier+order">.order</a> : <code>number</code></li><li><a href="#ReRollModifier+name">.name</a> ⇒ <code>string</code></li><li><a href="#ReRollModifier+notation">.notation</a> ⇒ <code>string</code></li><li><a href="#ReRollModifier+once">.once</a> ⇒ <code>boolean</code></li><li><a href="#ReRollModifier+once">.once</a></li><li><a href="#ReRollModifier+defaultComparePoint">.defaultComparePoint(_context)</a> ⇒ <code>array</code></li><li><a href="#ReRollModifier+run">.run(results, _context)</a> ⇒ <code>RollResults</code></li><li><a href="#ReRollModifier+toJSON">.toJSON()</a> ⇒ <code>Object</code></li></ul></li></ul><p><a name="new_ReRollModifier_new"></a></p><h3 id="new-rerollmodifier-once-comparepoint" tabindex="-1"><a class="header-anchor" href="#new-rerollmodifier-once-comparepoint" aria-hidden="true">#</a> new ReRollModifier([once], [comparePoint])</h3><p>Create a <code>ReRollModifier</code> instance.</p><table><thead><tr><th>Param</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>[once]</td><td><code>boolean</code></td><td><code>false</code></td><td>Whether to only re-roll once or not</td></tr><tr><td>[comparePoint]</td><td><code>ComparePoint</code></td><td><code></code></td><td>The comparison object</td></tr></tbody></table><p><a name="ReRollModifier+order"></a></p><h3 id="rerollmodifier-order-number" tabindex="-1"><a class="header-anchor" href="#rerollmodifier-order-number" aria-hidden="true">#</a> reRollModifier.order : <code>number</code></h3><p>The default modifier execution order.</p><p><strong>Kind</strong>: instance property of <a href="#ReRollModifier"><code>ReRollModifier</code></a><br><a name="ReRollModifier+name"></a></p><h3 id="rerollmodifier-name-⇒-string" tabindex="-1"><a class="header-anchor" href="#rerollmodifier-name-⇒-string" aria-hidden="true">#</a> reRollModifier.name ⇒ <code>string</code></h3><p>The name of the modifier.</p><p><strong>Kind</strong>: instance property of <a href="#ReRollModifier"><code>ReRollModifier</code></a><br><strong>Returns</strong>: <code>string</code> - &#39;re-roll&#39;<br><a name="ReRollModifier+notation"></a></p><h3 id="rerollmodifier-notation-⇒-string" tabindex="-1"><a class="header-anchor" href="#rerollmodifier-notation-⇒-string" aria-hidden="true">#</a> reRollModifier.notation ⇒ <code>string</code></h3><p>The modifier&#39;s notation.</p><p><strong>Kind</strong>: instance property of <a href="#ReRollModifier"><code>ReRollModifier</code></a><br><a name="ReRollModifier+once"></a></p><h3 id="rerollmodifier-once-⇒-boolean" tabindex="-1"><a class="header-anchor" href="#rerollmodifier-once-⇒-boolean" aria-hidden="true">#</a> reRollModifier.once ⇒ <code>boolean</code></h3><p>Whether the modifier should only re-roll once or not.</p><p><strong>Kind</strong>: instance property of <a href="#ReRollModifier"><code>ReRollModifier</code></a><br><strong>Returns</strong>: <code>boolean</code> - <code>true</code> if it should re-roll once, <code>false</code> otherwise<br><a name="ReRollModifier+once"></a></p><h3 id="rerollmodifier-once" tabindex="-1"><a class="header-anchor" href="#rerollmodifier-once" aria-hidden="true">#</a> reRollModifier.once</h3><p>Set whether the modifier should only re-roll once or not.</p><p><strong>Kind</strong>: instance property of <a href="#ReRollModifier"><code>ReRollModifier</code></a></p><table><thead><tr><th>Param</th><th>Type</th></tr></thead><tbody><tr><td>value</td><td><code>boolean</code></td></tr></tbody></table><p><a name="ReRollModifier+defaultComparePoint"></a></p><h3 id="rerollmodifier-defaultcomparepoint-context-⇒-array" tabindex="-1"><a class="header-anchor" href="#rerollmodifier-defaultcomparepoint-context-⇒-array" aria-hidden="true">#</a> reRollModifier.defaultComparePoint(_context) ⇒ <code>array</code></h3><p>The default compare point definition</p><p><strong>Kind</strong>: instance method of <a href="#ReRollModifier"><code>ReRollModifier</code></a></p><table><thead><tr><th>Param</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>_context</td><td><code>StandardDice</code> | <code>RollGroup</code></td><td>The object that the modifier is attached to</td></tr></tbody></table><p><a name="ReRollModifier+run"></a></p><h3 id="rerollmodifier-run-results-context-⇒-rollresults" tabindex="-1"><a class="header-anchor" href="#rerollmodifier-run-results-context-⇒-rollresults" aria-hidden="true">#</a> reRollModifier.run(results, _context) ⇒ <code>RollResults</code></h3><p>Run the modifier on the results.</p><p><strong>Kind</strong>: instance method of <a href="#ReRollModifier"><code>ReRollModifier</code></a><br><strong>Returns</strong>: <code>RollResults</code> - The modified results</p><table><thead><tr><th>Param</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>results</td><td><code>RollResults</code></td><td>The results to run the modifier against</td></tr><tr><td>_context</td><td><code>StandardDice</code> | <code>RollGroup</code></td><td>The object that the modifier is attached to</td></tr></tbody></table><p><a name="ReRollModifier+toJSON"></a></p><h3 id="rerollmodifier-tojson-⇒-object" tabindex="-1"><a class="header-anchor" href="#rerollmodifier-tojson-⇒-object" aria-hidden="true">#</a> reRollModifier.toJSON() ⇒ <code>Object</code></h3><p>Return an object for JSON serialising.</p><p>This is called automatically when JSON encoding the object.</p><p><strong>Kind</strong>: instance method of <a href="#ReRollModifier"><code>ReRollModifier</code></a></p>',42),a=[i];function l(n,c){return o(),r("div",null,a)}const f=e(d,[["render",l],["__file","ReRollModifier.html.vue"]]);export{f as default};